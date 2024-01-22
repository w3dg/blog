---
title: "Dotfiles."
excerpt: "Dotfiles are what make a system yours. Some information about how I have these setup on my machine"
coverImage: "/assets/blog/dotfiles-and-management/cover.png"
date: "2024-01-22T11:35:38+05:30"
author:
  name: Debopam Gupta
  picture: "/assets/blog/authors/dg.jpeg"
ogImage:
  url: "/assets/blog/dotfiles-and-management/cover.png"
furtherReadings:
  - name: Reflections on 2023 and aspirations
    link: "/posts/2023-12-29-reflections-2023"
  - name: Kicking off this blog with the classic hello world
    link: "/posts/2023-12-09-hello-world"
---

## Dotfiles and how i manage them

> Dotfiles are the configuration files for your system. It is what makes your `$HOME`, to `$HOME sweet $HOME`, basically your personalised settings.

In this blog, I will try to explain how my dotfiles are setup, and some settings/configurations I have. You can find a current copy of my dotfiles here, <a href="https://github.com/w3dg/dotfiles" data-link>https://github.com/w3dg/dotfiles</a>

---

### Shell

As for the shell i am using `bash`. I am working on Windows for the while and the standard installation of <a href="https://git-scm.com/downloads" data-link>Git Bash</a> or <a href="https://learn.microsoft.com/en-us/windows/wsl/about" data-link>WSL</a> works fine for me. A guide to install WSL can be found from Microsoft <a href="https://learn.microsoft.com/en-us/windows/wsl/install" data-link>here</a>. As well as i have picked up and learnt my way through bash and the command line in general and hence i stick to it.

I have tried out <a href="https://zsh.sourceforge.io/" data-link>ZSH</a> and <a href="https://ohmyz.sh/" data-link>`oh-my-zsh`</a> and its great as well. Some suggestions are to use with <a href="https://github.com/zsh-users/zsh-autosuggestions" data-link>zsh-autosuggestions</a> package and <a href="https://github.com/zsh-users/zsh-syntax-highlighting" data-link>zsh-syntaxhighlighting</a> package.

---

### Bash Config (`.bashrc`)

Customising bash requires you to edit your `.bashrc` file located in your home directory typically denoted by `~`.

Here's a top level view of what i have in my .bashrc

```bash
eval "$(dircolors -b ~/.dircolors)"
```

This evaluates dircolors for the ls command.

```bash
source ~/.bash/bindings.bash       # Bindings
source ~/.bash/shopts.bash         # Shopts
source ~/.bash/exports.bash        # Exports
source ~/.bash/functions.bash      # Custom functions
source ~/.bash/aliases.bash        # Aliases
source ~/.bash/git_aliases.bash    # Git aliases
```

These are various keybindings, shell options, exports of environment variables, custom functions and aliases which i have enabled.

### Useful Bindings

```bash
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'
```

These will allow you to press the up key after typing a command to search your history to let you see the previous ways you had used it which is useful if you forgot the certain way you used a command before.

There are more, check out my dotfiles or anyone else's or research on the interet to find more!

### Useful functions

```bash
ex()
{
  if [ -f "$1" ] ; then
    case $1 in
      *.tar.bz2)   tar xjf $1   ;;
      *.tar.gz)    tar xzf $1   ;;
      *.bz2)       bunzip2 $1   ;;
      *.rar)       unrar x $1   ;;
      *.gz)        gunzip $1    ;;
      *.tar)       tar xf $1    ;;
      *.tbz2)      tar xjf $1   ;;
      *.tgz)       tar xzf $1   ;;
      *.zip)       unzip $1     ;;
      *.Z)         uncompress $1;;
      *.7z)        7z x $1      ;;
      *.deb)       ar x $1      ;;
      *.tar.xz)    tar xf $1    ;;
      *.tar.zst)   unzstd $1    ;;
      *)           echo "'$1' cannot be extracted via ex()" ;;
    esac
  else
    echo "'$1' is not a valid file"
  fi
}
```

This allows to extract given almost any sort of compressed file which is useful as I do not need to remember which command to use specifically.

```bash
mkcd() {
  mkdir $1 && cd $1
}
```

This function makes a directory and drops you into it all at once.

A great resource I had found for my git aliases is the `oh-my-zsh` repo - <a href="https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh" data-link>https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh</a>

For some bling in the terminal, this line displays a ascii cow saying a random quote each time i open a terminal. This uses the [fortune](<https://en.wikipedia.org/wiki/Fortune_(Unix)>) and [cowsay](https://en.wikipedia.org/wiki/Cowsay) programs with the Tux Cowfile.

```bash
fortune | cowsay -f tux
```

The next 3 lines allow for utf8 input and output in the terminal.

```bash
# Allow UTF-8 input and output, instead of showing stuff like $'\0123\0456'
set input-meta on
set output-meta on
set convert-meta off
```

Given all this custom settings and more you would obviously want to back them up and use it across machines or if you have a new machine.

A typical prompt of mine looks something like this -

![My Prompt](/assets/blog/dotfiles-and-management/prompt.png)

---

## How to manage the various dotfiles across machines?

Typically on Linux, people will symlink their dotfiles kept in some other directory, generally under version control, to their home directory where everything should exist to allow the programs to pick the settings up.

So, you will see people doing this,

```bash
DOTFILES=(.bash_profile .gitconfig .gitignore)

# Remove old dotfiles and replace them
for dotfile in $(echo ${DOTFILES[*]});
do
    rm ~/$(echo $dotfile)
    ln -s ~/dotfiles/$(echo $dotfile) ~/$(echo $dotfile)
done
```

This code snippet above is a for loop in bash which loops through the given array of dotfiles and links them to the home directory.

Given on linux, this works very fine.

So granted I'm using Git Bash on Windows, it should work on Windows as well right?

The sad answer is no, even though there is a `ln` command, it doesn't seem to do anything. <a href="https://gist.github.com/huenisys/1efb64e57c37cfab7054c65702588fce?permalink_comment_id=4190996#gistcomment-4190996" data-link>Enabling symlink option</a> while installing looks to do the trick.

Anyway I decided to tackle this and write powershell script which does the same for me.

Heres that script,

```powershell
$dotfiles = (".bashrc", ".bash_profile", ".dircolors", ".gitconfig", ".gitconfig", ".inputrc", ".npmrc", ".bash")

foreach ($element in $dotfiles) {
  echo Linking $element
  New-Item -path $HOME\$element -itemType SymbolicLink -target $HOME\code\dotfiles\$element
}

```

This does the same thing and now the files are correctly linked to the other directory under version control. And that directory is very much my dotfiles repository.

---

### Some modern replacements

Some of the commands have modern replacements (mostly in rust these days) and some extra commands that I install and use for my day to day. These are also included in my dotfiles to run instead of the standard commands. Lets take a brief look over them.

- **7zip** - For working with archives <a href="https://7-zip.org/" data-link>https://7-zip.org/</a>
- **bat** - A better `cat` <a href="https://github.com/sharkdp/bat" data-link>https://github.com/sharkdp/bat</a>
- **bc** - GNU `bc` the calculator <a href="https://www.gnu.org/software/bc/bc.html" data-link>https://www.gnu.org/software/bc/bc.html</a>
- **delta** - For better diffs <a href="https://dandavison.github.io/delta/" data-link>https://dandavison.github.io/delta/</a>
- **exiftool** - Viewing and editing metadata <a href="https://exiftool.org" data-link>https://exiftool.org</a>
- **eza** - A modern, maintained replacement for ls, built on exa. <a href="https://github.com/eza-community/eza" data-link>https://github.com/eza-community/eza</a>
- **fd** - Alternative to `find` - <a href="https://github.com/sharkdp/fd" data-link>https://github.com/sharkdp/fd</a>
- **ffmpeg** - A complete, cross-platform solution to record, convert and stream audio and video. : <a href="https://ffmpeg.org" data-link>https://ffmpeg.org</a>
- **glow** - Markdown reader for the terminal with a TUI <a href="https://github.com/charmbracelet/glow" data-link>https://github.com/charmbracelet/glow</a>
- **hexyl** - Hex viewer, which uses colored output. <a href="https://github.com/sharkdp/hexyl" data-link>https://github.com/sharkdp/hexyl</a>
- **jq** - Lightweight and flexible command-line JSON processor <a href="https://jqlang.github.io/jq" data-link>https://jqlang.github.io/jq</a>
- **micro** - A terminal-based text editor that aims to be easy to use and intuitive <a href="https://micro-editor.github.io" data-link>https://micro-editor.github.io</a>
- **ngrok** - For forwarding servers onto open internet. <a href="https://ngrok.com" data-link>https://ngrok.com</a>
- **pandoc** - Universal markup converter <a href="https://pandoc.org" data-link>https://pandoc.org</a>
- **ripgrep** - Better `grep`. Recursively searches directories for a regex pattern. <a href="https://github.com/BurntSushi/ripgrep" data-link>https://github.com/BurntSushi/ripgrep</a>
- **tokei** - Count lines of code <a href="https://github.com/XAMPPRocky/tokei" data-link>https://github.com/XAMPPRocky/tokei</a>
- **tre-command** - Improved Tree command <a href="https://github.com/dduan/tre" data-link>https://github.com/dduan/tre</a>
- **zoxide** - A faster way to navigate your filesystem <a href="https://github.com/ajeetdsouza/zoxide" data-link>https://github.com/ajeetdsouza/zoxide</a>

I set some of these as aliases to original commands as replacements. You can view them in my aliases <a href="https://github.com/w3dg/dotfiles/blob/main/.bash/aliases.bash" data-link>here</a>.

Thats about it for the setup. I might later do a dev setup blog soon going over the tools and technologies I use.

### References

- <a href="https://github.com/w3dg/dotfiles" data-link>My dotfiles</a>
- <a href="https://dotfiles.github.io/inspiration/" data-link>A collection of popular dotfiles setups</a> I have taken a lot of inspiration and things from these
