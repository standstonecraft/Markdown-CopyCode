document.querySelectorAll('pre > code').forEach(code => {
  const pre = code.parentNode;
  pre.parentNode.insertBefore(
    (_ => {
      const div = document.createElement('div');
      div.style =
        'background-color:rgb(128 128 128 / 40%); padding:6px 6px 6px 10px; font-family: var(--vscode-editor-font-family, "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace)';
      if (code.className) {
        const languageSpan = (_ => {
          const languageSpan = document.createElement('span');
          languageSpan.appendChild(document.createTextNode(code.className.replace('language-', '')));
          return languageSpan;
        })();
        div.append(languageSpan);
      }
      const copiedSpan = (_ => {
        const copiedSpan = document.createElement('span');
        copiedSpan.style = 'margin-left:1em;';
        return copiedSpan;
      })();
      const svgSpan = (_ => {
        const svgSpan = document.createElement('span');
        svgSpan.innerHTML =
          '<svg viewBox="0 0 115.77 122.88" style="height:1em;" ><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/></g></svg>';
        svgSpan.style = 'margin-left:1em; cursor:pointer;';
        svgSpan.title = 'copy code';
        svgSpan.addEventListener('click', (elem, ev) => {
          document.getSelection().selectAllChildren(svgSpan.parentNode.nextSibling.firstChild);
          document.execCommand('copy');
          document.getSelection().empty();
          copiedSpan.textContent = 'Copied.';
          setTimeout(() => {
            copiedSpan.textContent = '';
          }, 1500);
        });
        return svgSpan;
      })();
      div.append(svgSpan, copiedSpan);
      return div;
    })(),
    pre
  );
  pre.style = 'margin-top:0px; padding-top:4px;';
});
