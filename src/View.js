
function View() {
    this._root = document.querySelector('div#root');
    this._gameBlock = null;
    this._gameNumbers = null;
    this.mix_button = null;
}

View.prototype.init = function() {
    const container_welcome_page = createDiv({class: 'container_welcome_page', id: 'welcome'});
    const container_game_page = createDiv({class: 'container_game_page', id: 'gameContainer'});
    const welcome_page_bgColor = createDiv({class: 'welcome_page_bgColor'});
    const color_block = createDiv({class: 'color_block'});
    const light = createButton({class: 'color_block_light color'});
    const dark = createButton({class: 'color_block_dark color'});
    const white = createButton({class: 'color_block_white color'});
    const page_heading_light = createHeading({class: 'page_heading_light'});
    const play_button = createButton({class: 'play_button', id: 'play_button'});
    const mixDiv = createDiv({class: 'mixDiv'});

    light.innerHTML = 'Colorful mode';
    dark.innerHTML = 'Dark mode';
    this._gameBlock = createDiv({class: 'game_dark'});
    white.innerHTML = 'White mode';
    page_heading_light.innerHTML = 'WELCOME TO FIFTEEN!';
    play_button.innerHTML = 'PLAY';
    this.mix_button = createButton({class: 'mix_button', id: 'mix_button'});
    this.mix_button.innerHTML = 'MIX';
    container_game_page.append(mixDiv);
    mixDiv.append(this.mix_button);
    container_game_page.append(this._gameBlock);
    this._root.append(container_welcome_page);
    this._root.append(container_game_page);
    color_block.append(light);
    color_block.append(dark);
    color_block.append(white);
    container_welcome_page.append(page_heading_light);
    container_welcome_page.append(play_button);
    container_welcome_page.append(color_block);
    container_welcome_page.append(welcome_page_bgColor);

    this.visible();
    this.lightMode();
    this.dark();
    this.white();
}

View.prototype.dark = function () {
    const dark = document.querySelector('.color_block_dark');

    dark.addEventListener('click', () => {
        document.querySelector('.play_button').style.backgroundColor = '#ffffff';
        document.querySelector('.play_button').style.color = '#000000';
        document.querySelector('.container_welcome_page').style.background = '#000'; 
        document.querySelector('.page_heading_light').style.color = '#fff';
        document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/fifteen_second_light_bg.jpg)'; 
    })
}

View.prototype.white = function () {
    const white = document.querySelector('.color_block_white');
    
    white.addEventListener('click', () => {
        document.querySelector('.container_welcome_page').style.background = '#ffffff';
        document.querySelector('.play_button').style.backgroundColor = '#000000';
        document.querySelector('.play_button').style.color = '#ffffff';
        document.querySelector('.page_heading_light').style.color = '#000000';
        document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/fifteen_second-dark_bg.jpg)';
        document.querySelector('.mix_button').style.backgroundColor = '#000000';
        document.querySelector('.mix_button').style.color = '#ffffff';
        document.querySelector('.game_dark').style.backgroundColor = '#000000';
        document.querySelector('.game_dark').style.color = '#ffffff';
        document.querySelector('.game_dark').style.border = '1px solid #ffffff';
    })
}

View.prototype.lightMode = function () {
    const light = document.querySelector('.color_block_light');

    light.addEventListener('click', () => {
        document.querySelector('.mix_button').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';
        document.querySelector('.mix_button').style.color = '#ffffff';
        document.querySelector('.game_dark').style.backgroundColor = 'rgba(255, 47, 47, 0.31)';
        document.querySelector('.game_dark').style.color = '#ffffff';
        document.querySelector('.play_button').style.backgroundColor = 'rgb(226, 25, 25)';
        document.querySelector('.play_button').style.color = '#ffffff';
        document.querySelector('.container_game_page').style.backgroundImage = 'url(./images/light-bg.jpg)';
        document.querySelector('.container_game_page').style.backgroundSize = 'cover';
        document.querySelector('.container_welcome_page').style.background = 'linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)';
        document.querySelector('.page_heading_light').style.color = '#ffffff';
        document.querySelector('.game_blocks').classList.add('game_light_background');
    })
}

View.prototype.visible = function () {
    const play = document.querySelector('#play_button');

    play.addEventListener('click', () => {
        document.querySelector('#gameContainer').style.display = 'flex';
        document.querySelector('.container_welcome_page').style.display = 'none';
    });
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

export default View;