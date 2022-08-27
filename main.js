window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for( let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];//get the single data switcher of nav
        const page_id = tab_switcher.dataset.tab;//this is the number of dataswitch of nav
        tab_switcher.addEventListener("click", ()=>{
            document.querySelector('ul .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');
            switch_page(page_id);
        })
    }
    
    const switch_page = (page_id) =>{
        const current_page = document.querySelector(`#pages .page.is-active`);
        current_page.classList.remove('is-active');

        const next_page = document.querySelector(`#pages .page[data-page="${page_id}"]`);
        next_page.classList.add('is-active');
        
    }
  

}