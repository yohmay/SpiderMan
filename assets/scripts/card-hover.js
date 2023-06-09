function handleMouseEnter(){
    this.classList.add('spider-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('spider-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards(){
    const cardElement = document.getElementsByClassName('spider-card');
    for (let index = 0; index < cardElement.length; index++){
        const card = cardElement[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
