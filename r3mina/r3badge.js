FAN = ["lnphane", "rin2401"]


function add_badge() {
    badge = `<div aria-label="Identity Badges" role="button" tabindex="0">
        <div>
            <span style="color: #fdb233">🐹 Phan siêu cứng</span>
        </div>
    </div>`


    // <img height="12" alt="" style="color: #f2c2cf" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/mTNr7Jn2-Jk.png">

    posts = document.querySelectorAll('[role="article"]')
    for (post of posts) {
        titles = post.querySelectorAll("h1,h2,h3,h4,h5")
        if (titles.length > 0) {
            title = titles[0].querySelector("a")
            if (!title.href || !title.href.includes("r3mina")) continue    
        }
        
        comments = post.querySelectorAll('li div[role="article"]')
        for (comment of comments) {
            user = comment.querySelectorAll('a')[1]
            is_fan = FAN.some(v => user.href.includes(v))

            if (!is_fan) continue

            parent = user.parentElement.parentElement

            badges = parent.querySelectorAll('[role="button"]')

            if (!badges.length) {
                parent.innerHTML = badge + parent.innerHTML
            }
        }
    }
}

function add_click_event() {
    for (i = 50; i < 500; i += 50)
        setTimeout(add_badge, i)
}

function add_click() {
    mores = document.querySelectorAll('[dir="auto"]')

    for (more of mores) {
        more.removeEventListener("click", add_click_event)
        more.addEventListener("click", add_click_event)
    }
}

add_badge()
window.addEventListener("scroll", add_click);
window.addEventListener("scroll", add_badge);