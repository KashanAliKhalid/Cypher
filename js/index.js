
window.onload=function () {
const remove_description_class = () => {
    for (let i = 1; i < 4; i++) {
        let class_name = "d" + i;
        document.getElementById(class_name).classList.remove("description-box-active")
    }
};
    document.querySelector("#description").addEventListener("click", ev => {
        remove_description_class();
        const select = ev.target.id;
        document.getElementById(select).classList.add("description-box-active");
        if (select === "d2") {
            $('.description-heading').fadeOut(() => {
                $('.description-heading').text('Fast')
            }).fadeIn();

            $('.description-text').fadeOut(() => {
                $('.description-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
            }).fadeIn();


        } else if (select === "d1") {
            $('.description-heading').fadeOut(() => {
                $('.description-heading').text('Functionality')
            }).fadeIn();

            $('.description-text').fadeOut(() => {
                $('.description-text').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
            }).fadeIn();
        }

    });
};
