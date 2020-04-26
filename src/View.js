function View() {
    this._root = document.querySelector('div#root');
    this._canvas = null;
    this._ctx = null;

}
View.prototype.getCanvasContext = () => {
    return this._ctx;
    }

const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'canvas');
    canvas.setAttribute('height', '320px');
    canvas.setAttribute('width', '320px');


    this._ctx = canvas.getContext('2d');
    
    return canvas;
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
    this._canvas = createCanvas();
    this._root.append(this._canvas);
    container_welcome_page.append(page_heading);
    container_welcome_page.append(play_button);
    container_welcome_page.append(welcome_page_bgColor);
    container_game_page.append(mix_button);
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



View.prototype.canvasElems = (context, cellSize) => {
    let arr = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,0]
    ];

    function cellView (x, y) {
        context.fillStyle = '#136781';
        context.fillRect(
            x + 1,
            y + 1,
            cellSize - 2,
            cellSize - 2
        );
    }
    function numView(){
		context.font = "bold "+ 
      (cellSize/4) + "px Sans";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#222";
    }
    this.getNullCell = function(){
		for (var i = 0; i<4; i++){
			for (var j=0; j<4; j++){
				if(arr[j][i] === 0){
					return {'x': i, 'y': j};
				}
			}
		}
    }
    this.draw = function() {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if (arr[i][j] > 0) {
					cellView(
                        j * cellSize, 
                        i * cellSize
                    );
					numView();
					context.fillText(
                        arr[i][j], 
                        j * cellSize + cellSize / 2,
                        i * cellSize + cellSize / 2
                    );
				}
			}
        }
    }
}


module.exports = View;