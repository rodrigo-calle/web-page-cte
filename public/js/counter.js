const counters = document.querySelectorAll('#unionized');
const speed = 750; // The lower the slower
export default function counter() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            // Lower inc to slow and higher to slow
            const inc = target / speed;
    
            // console.log(inc);
            // console.log(count);
    
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = count + inc;
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }

            setTimeout(()=> {
                counter.innerText = "150 000";
            }, 3000)
        };
    
        updateCount();
    });
    
}
