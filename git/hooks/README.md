**Clone this repository**
> `git clone https://github.com/gechr/miscellaneous ~/misc`

**Create a template directory**
> `mkdir -p ~/.gittemplates/hooks`

**Tell Git about your new template directory**
> `git config --global init.templatedir ~/.gittemplates`

**Symlink (or copy) the hooks you want**
> `ln -s ~/misc/git/hooks/<hook-type>.<hook-name> ~/.gittemplates/hooks/<hook-type>`

e.g. `ln -s ~/misc/git/hooks/pre-push.linkifier ~/.gittemplates/hooks/pre-push`

**Make sure the hooks are executable**
> `chmod +x ~/.gittemplates/hooks/*`

**(optional) Reinitialise any existing Git repositories to pick up the new hooks**
> `cd existing-repo && git init`

_Note: Any freshly cloned repositories will automatically be initialised with your custom hooks without the need to manually reinitialise them_
