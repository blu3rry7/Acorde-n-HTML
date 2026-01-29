const items = document.querySelectorAll(".faq-container");

items.forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        const question = item.querySelector(".question");
        const arrow = item.querySelector(".arrow-container");

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            question.classList.remove("active");
            arrow.classList.remove("up");
        } else {
            items.forEach(i => {
                i.querySelector(".faq-answer").style.maxHeight = null;
                i.querySelector(".question").classList.remove("active");
                i.querySelector(".arrow-container").classList.remove("up");
            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            question.classList.add("active");
            arrow.classList.add("up");

            lluviaEmojis();
        }
    });
});


