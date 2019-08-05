const teamPhoto = () => {
    const blockTeam = document.querySelector('.command');

    function getChangeImg(target) {
        let getChangedItem = target.src;
        target.src = target.dataset.img;
        target.dataset.img = getChangedItem;
    }

    blockTeam.addEventListener('mouseover', (event) => {
        const target = event.target;
        if (target.matches('.command__photo')) {
            getChangeImg(target);
        }
    });

    blockTeam.addEventListener('mouseout', (event) => {
        const target = event.target;
        if (target.matches('.command__photo')) {
            getChangeImg(target);
        }
    });
};

export default teamPhoto;