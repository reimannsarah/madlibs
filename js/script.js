window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {

        document.querySelector("span#person1a").innerText = "person 1";
        document.querySelector("span#person1b").innerText = "person 1";
        document.querySelector("span#person1c").innerText = "person 1";
        document.querySelector("span#person2a").innerText = "person 2";
        document.querySelector("span#person2b").innerText = "person 2";
        document.querySelector("span#animal").innerText = "an animal";
        document.querySelector("span#verb").innerText = "verb";
        document.querySelector("span#noun").innerText = "noun";
        document.querySelector("span#exclamation").innerText = "exclamation";
    
        // then we show the story by removing the class attribute
        document.querySelector("div#story").removeAttribute("class");
        event.preventDefault();
    };
};