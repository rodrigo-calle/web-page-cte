const d = document

export default function counter(){
    const $digit = d.querySelector('#unionized');
    const $secondSection = d.querySelector('.second-section')

    var stoped = false
    let observer = new IntersectionObserver((entries, observer) => {   
        var i = 0
        if(entries[i] && !stoped) {
            stoped = true
            for (let index = 0; index < 150001; index++) {
                setInterval(() => {
                    $digit.innerHTML = String(index)
                }, 10000);                
            } 
           
        }
        i = 1
    })

    observer.observe($secondSection)
}

