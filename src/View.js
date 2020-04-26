function View() {
    this._root = document.querySelector('div#root');
}
View.prototype.init = function() {
    const container_welcome_page = createDiv({class: 'container_welcome_page'});
    const container_game_page = createDiv({class: 'container_game_page'});
    const welcome_page_bgColor = createDiv({class: 'welcome_page_bgColor'})
    const page_heading = createHeading({class: 'page_heading'});
    page_heading.innerHTML = 'WELCOME TO FIFTEEN!';
    const play_button = createButton({class: 'play_button', id: 'play_button'});
    play_button.innerHTML = 'PLAY';
    const mix_button = createButton({class: 'mix_button', id: 'mix_button'});
    mix_button.innerHTML = 'MIX';
    this._root.append(container_welcome_page);
    this._root.append(container_game_page);
    container_welcome_page.append(page_heading);
    container_welcome_page.append(play_button);
    container_welcome_page.append(welcome_page_bgColor);
    container_game_page.append(mix_button);
}

module.exports = View;