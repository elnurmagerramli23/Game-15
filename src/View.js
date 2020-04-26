function View() {
    this._root = document.querySelector('div#root');
}

View.prototype.init = function() {
    const container_welcome_page = createDiv({class: 'container_welcome_page'});
    const container_game_page = createDiv({class: 'container_game_page'});
    const welcome_page_bgColor = createDiv({class: 'welcome_page_bgColor'});
    const game = createDiv({class: 'game'});
    const game_controls = createDiv({class: 'grid'});
    const game_info = createDiv({class: 'footer'});
    const page_heading = createHeading({class: 'page_heading'});
    page_heading.innerHTML = 'WELCOME TO FIFTEEN!';
    const play_button = createButton({class: 'play_button', id: 'play_button'});
    play_button.innerHTML = 'PLAY';
    const mix_button = createButton({class: 'mix_button', id: 'mix_button'});
    mix_button.innerHTML = 'MIX';
    const btn1 = createButton({class: 'number', id: 'number', inner: '1'});
    const btn2 = createButton({class: 'number', id: 'number', inner: '2'});
    const btn3 = createButton({class: 'number', id: 'number', inner: '3'});
    const btn4 = createButton({class: 'number', id: 'number', inner: '4'});
    const btn5 = createButton({class: 'number', id: 'number', inner: '5'});
    const btn6 = createButton({class: 'number', id: 'number', inner: '6'});
    const btn7 = createButton({class: 'number', id: 'number', inner: '7'});
    const btn8 = createButton({class: 'number', id: 'number', inner: '8'});
    const btn9 = createButton({class: 'number', id: 'number', inner: '9'});
    const btn10 = createButton({class: 'number', id: 'number', inner: '10'});
    const btn11 = createButton({class: 'number', id: 'number', inner: '11'});
    const btn12 = createButton({class: 'number', id: 'number', inner: '12'});
    const btn13 = createButton({class: 'number', id: 'number', inner: '13'});
    const btn14 = createButton({class: 'number', id: 'number', inner: '14'});
    const btn15 = createButton({class: 'number', id: 'number', inner: '15'});
    const btn0 = createButton({class: 'number', id: 'number', inner: ''});
    const span_clicks = createSpan({id: 'move', inner: 'Move: 100'});
    const span_time = createSpan({id: 'time', inner: 'Time: 100'});
    const victory_message = document.createElement('h3');
    victory_message.setAttribute('class', 'message');
    this._root.append(container_welcome_page);
    this._root.append(container_game_page);
    this._root.append(game);
    this._root.append(victory_message);
    container_welcome_page.append(page_heading);
    container_welcome_page.append(play_button);
    container_welcome_page.append(welcome_page_bgColor);
    container_game_page.append(mix_button);
    game.append(game_controls);
    game.append(game_info);
    game_controls.append(btn1);
    game_controls.append(btn2);
    game_controls.append(btn3);
    game_controls.append(btn4);
    game_controls.append(btn5);
    game_controls.append(btn6);
    game_controls.append(btn7);
    game_controls.append(btn8);
    game_controls.append(btn9);
    game_controls.append(btn10);
    game_controls.append(btn11);
    game_controls.append(btn12);
    game_controls.append(btn13);
    game_controls.append(btn14);
    game_controls.append(btn15);
    game_controls.append(btn0);
    game_info.append(span_clicks);
    game_info.append(span_time);
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

const createSpan = params => {
    const span = document.createElement('span');
    params.id && (span.id = params.id);
    params.inner && (span.innerHTML = params.inner);

    return span;
}

module.exports = View;