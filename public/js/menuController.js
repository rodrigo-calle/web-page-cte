const d = document;

export default function mainMenu() {
    const $whatIsCtr = d.querySelector('#cte-menu-btn'),
    $history = d.querySelector('#history-menu-btn'),
    $whatIsCtrBtn = d.querySelector('#cte-meaning-btn'),
    $historyBtn = d.querySelector('#history-btn');

    d.addEventListener("click", (e) => {
        let event = e.target;

        if(event === $history || event === $historyBtn) {
            $historyBtn.classList.add('menu-option__selected')
            $whatIsCtrBtn.classList.remove('menu-option__selected')
        }

        if(event === $whatIsCtr || event === $whatIsCtrBtn) {
            $historyBtn.classList.remove('menu-option__selected')
            $whatIsCtrBtn.classList.add('menu-option__selected')
        }
    })

}