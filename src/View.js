function View() {
    this._root = document.querySelector('div#root');
    this._gameBlock = null;
    this._gameNumbers = null;
    this.mix_button = null;
}
View.prototype.init = function() {
    const container_welcome_page = createDiv({class: 'container_welcome_page'});
    const container_game_page = createDiv({class: 'container_game_page'});
    const welcome_page_bgColor = createDiv({class: 'welcome_page_bgColor'});
    this._gameBlock = createDiv({class: 'game'});
    const page_heading = createHeading({class: 'page_heading'});
    page_heading.innerHTML = 'WELCOME TO FIFTEEN!';
    const play_button = createButton({class: 'play_button', id: 'play_button'});
    play_button.innerHTML = 'PLAY';
    this.mix_button = createButton({class: 'mix_button', id: 'mix_button'});
    this.mix_button.innerHTML = 'MIX';
    const mixDiv = createDiv({class: 'mixDiv'});
    container_game_page.append(mixDiv);
    mixDiv.append(this.mix_button);
    container_game_page.append(this._gameBlock);
    this._root.append(container_welcome_page);
    this._root.append(container_game_page);
    container_welcome_page.append(page_heading);
    container_welcome_page.append(play_button);
    container_welcome_page.append(welcome_page_bgColor);
}

const createDiv = params => {
    const div = document.createElement('div');
    div.setAttribute('class', params.class);
    params.id && (div.id = params.id);
    params.title && (div.title = params.title);
    params.textContent && (div.textContent = params.textContent);
    params.inner && (div.innerHTML = params.inner);

    return div;
}

const createHeading = params => {
    const heading = document.createElement('h1');
    
    heading.setAttribute('class', params.class);
    params.inner && (heading.innerHTML = params.inner);

    return heading;
}

const createButton = params => {
    const button = document.createElement('button');

    button.setAttribute('class',params.class);
    params.id && (button.id = params.id);
    params.inner && (button.innerHTML = params.inner);
    params.onclick && (button.onclick = params.onclick);

    return button;
}

View.prototype.drawMatrix = function (element) {
    let gameNumbers = document.createElement('div');

    gameNumbers.innerHTML = element;
    gameNumbers.setAttribute('class', 'game_blocks');
    if (!element) {
        gameNumbers.setAttribute('class', 'game_blocks zero')
    }
    this._gameBlock.append(gameNumbers);
} 

View.prototype.sendValue = function (callback) {
    document.addEventListener('click', evt => {
        const { innerText } = evt.target;
        
        callback(innerText);
    }, false);
}

View.prototype.deleteItems = function () {
    const items = document.querySelectorAll('.game_blocks');
    
    items.forEach(item => {
        item.remove();
    });
}

View.prototype.gameShuffle = function (cb) {
    this.mix_button.addEventListener('click', evt => {
        const { innerText } = evt.target;
        
        cb(innerText);
    }, false)
}

View.prototype.showVictory = function () {
    this._gameBlock.addEventListener('click', )
}

View.prototype.gameShuffle = function (cb) {
    this.mix_button.addEventListener('click', evt => {
        const { array } = evt.target;
        
        cb(array);
    }, false)
}

module.exports = View;