# Markdown-CopyCode

Add a copy button on fenced code block (`<pre><code>`) in markdown (and HTML).

Note: You can't embed any javascript in markdown at GitHub.

## Image

![image](https://user-images.githubusercontent.com/7663652/88813919-77c75900-d1f4-11ea-9214-7e3cbce8c950.png)

## Installation

````markdown
# Something bothering title

```powershell
Get-ChildItem
```

<script src="https://cdn.jsdelivr.net/gh/standstonecraft/Markdown-CopyCode/js/mdCopyCode.min.js"></script>
````

## Bonus: bookmarklet

<a href="javascript:(function(d,s){ s=d.createElement('script');s.src='//cdn.jsdelivr.net/gh/standstonecraft/Markdown-CopyCode/js/mdCopyCode.min.js';d.body.appendChild(s);})(document)">bookmark this</a>
