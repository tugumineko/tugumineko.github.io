let SearchService=(()=>{const l={};let r,o,c;return l.queryText=null,l.template=`<div id="u-search">
  <div class="modal">
    <header class="modal-header" class="clearfix">
      <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit">
        <span class="fa-solid fa-search"></span>
      </button>
      <div id="algolia-search-input"></div>
      <a id="u-search-btn-close" class="btn-close"> <span class="fa-solid fa-times"></span> </a>
    </header>
    <main class="modal-body">
      <div id="algolia-search-results">
        <div id="algolia-hits">
          <div class="search-icon"><i class="fa-sharp fa-solid fa-telescope"></i></i></div>
        </div>
      </div>
    </main>
    <footer>
      <div id="algolia-pagination"></div>
      <hr>
      <div id="algolia-info">
        <div class="algolia-stats"></div>
        <div class="algolia-poweredBy"></div>
      </div>
    </footer>
  </div>
  <div id="modal-overlay" class="modal-overlay"></div>
  </div>
  `,l.init=()=>{var e=document.createElement("div");e.innerHTML+=l.template,document.body.append(e),(o=volantis.GLOBAL_CONFIG.search).appId&&o.apiKey&&o.indexName?(l.event(),l.setAlgolia()):(document.querySelector("#u-search main.modal-body").innerHTML="Algolia setting is invalid!",document.querySelector("#u-search main.modal-body").style.textAlign="center",document.querySelector("#u-search .modal").style.maxHeight="128px")},l.event=()=>{document.querySelector("#u-search-btn-close").addEventListener("click",l.close,!1),document.querySelector("#modal-overlay").addEventListener("click",l.close,!1),document.querySelectorAll(".u-search-form").forEach(e=>{e.addEventListener("submit",l.onSubmit,!1)}),document.querySelector("#algolia-search-input").addEventListener("input",e=>{var t=e.target.querySelector(".ais-SearchBox-input");l.queryText=(t||e.target).value})},l.setAlgolia=()=>{r=instantsearch({indexName:o.indexName,searchClient:algoliasearch(o.appId,o.apiKey),searchFunction(e){e.state.query&&e.search()}});var e=instantsearch.widgets.configure({hitsPerPage:o.hitsPerPage}),t=instantsearch.widgets.searchBox({container:"#algolia-search-input",autofocus:!0,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,searchAsYouType:o.searchAsYouType,placeholder:o.placeholder,templates:{input:"algolia-input"},queryHook(e,t){clearTimeout(c),c=setTimeout(()=>t(e),500)}}),a=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){var t=l.queryText?"?keyword="+l.queryText:"",a=e.permalink||""+volantis.GLOBAL_CONFIG.root+e.path,e=e._highlightResult,i=e.contentStripTruncate?l.cutContent(e.contentStripTruncate.value):e.contentStrip?l.cutContent(e.contentStrip.value):e.content?l.cutContent(e.content.value):"";return`
            <a href="${a}${t}" class="result">
            <span class="title">${e.title.value||"no-title"}</span>
            <span class="digest">${i}</span>
            </a>`},empty:function(e){return`<div id="resule-hits-empty"><i class="fa-solid fa-box-open"></i><p>${volantis.GLOBAL_CONFIG.languages.search.hits_empty.replace(/\$\{query}/,e.query)}</p></div>`}}}),i=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return""+volantis.GLOBAL_CONFIG.languages.search.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}}}),s=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy",theme:"dark"===volantis.dark?.mode?"dark":"light"}),n=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});r.addWidgets([e,t,a,i,s,n]),r.start()},l.setQueryText=e=>{l.queryText=e,r||l.init(),r?.setUiState({[o.indexName]:{query:e}})},l.search=()=>{document.querySelector("#u-search").style.display="block",document.addEventListener("keydown",e=>{"Escape"===e.code&&l.close()},{once:!0})},l.onSubmit=e=>{e.preventDefault();var t=e.target.querySelector(".u-search-input");l.setQueryText((t?.value?t:e.target).value),l.search()},l.cutContent=e=>{if(""===e)return"";var t=e.indexOf("<mark>");let a=t-30,i=t+120,s="",n="";return a<=0?(a=0,i=140):s="...",i>e.length?i=e.length:n="...",s+e.substring(a,i)+n},l.close=()=>{document.querySelector("#u-search").style.display="none"},{init:l.init,setQueryText:e=>{l.setQueryText(e)},search:l.search,close:l.close}})();Object.freeze(SearchService),SearchService.init();