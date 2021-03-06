/*jslint browser:true */
'use strict';

function JSlider(selector) {
    this.init(selector);
}

function JSliderStage(el) {
    this.doc = document;
    this.init(el);
}

JSlider.prototype.init = function (selector) {
    var elements = document.querySelectorAll(selector),
        i;

    this.slidersList = [];

    if (elements.length < 1) {
        return;
    }

    for (i = 0; i < elements.length; i += 1) {
        this.slidersList.push(new JSliderStage(elements[i]));
    }
};

JSliderStage.prototype.init = function (el) {
    this.root = el;
    this.currentPage = 1;
    this.images = this.root.querySelectorAll('img');

    if (this.images.length === 0) {
        return;
    }

    this.build();
};

JSliderStage.prototype.build = function () {
    this.getPageDimensions()
        .createStage()
        .initNavigation();
    this.root.innerHTML = '';
    this.root.appendChild(this.stage);
};

JSliderStage.prototype.getPageDimensions = function () {
    var i;
    this.pageWidth = this.pageHeight = 0;
    for (i = 0; i < this.images.length; i += 1) {
        if (this.images[i].width > this.pageWidth) {
            this.pageWidth = this.images[i].width;
        }
        if (this.images[i].height > this.pageHeight) {
            this.pageHeight = this.images[i].height;
        }
    }
    return this;
};

JSliderStage.prototype.createStage = function () {
    this.stage = this.doc.createElement('div');
    this.stage.className = 'jslider-stage';
    this.stage.style.width = this.pageWidth + 'px';

    this.buildTrack()
        .loadImages();

    this.stage.appendChild(this.sliderTrack);

    return this;
};

JSliderStage.prototype.buildTrack = function () {
    this.sliderTrack = this.doc.createElement('div');
    this.sliderTrack.className = 'jslider-track';
    this.sliderTrack.style.height = this.pageHeight + 'px';
    return this;
};

JSliderStage.prototype.loadImages = function () {
    var i,
        li;

    this.imageList = this.doc.createElement('ul');
    this.imageList.style.width = (this.images.length * this.pageWidth) + 'px';

    for (i = 0; i < this.images.length; i += 1) {
        li = this.doc.createElement('li');
        li.style.width = this.pageWidth + 'px';
        li.style.height = this.pageHeight + 'px';
        li.appendChild(this.images[i]);
        this.imageList.appendChild(li);
    }

    this.sliderTrack.appendChild(this.imageList);
};

JSliderStage.prototype.initNavigation = function () {
    var positionTop = ((this.pageHeight / 2) - 40) + 'px';

    if (this.images.length < 2) {
        return this;
    }

    this.createNavigationButton('left', positionTop)
        .createNavigationButton('right', positionTop);

    this.navButtonsList = this.stage.querySelectorAll('.jslider-navigation');

    return this;
};

JSliderStage.prototype.createNavigationButton = function (direction, positionTop) {
    var navButton = this.doc.createElement('a'),
        self = this,
        slidingLeft = (direction === 'left'),
        page;

    navButton.className = 'jslider-navigation ' + direction + (slidingLeft ? ' off' : '');
    navButton.style.top = positionTop;
    navButton.href = '#';
    navButton.innerHTML = (slidingLeft ? '‹' : '›');

    navButton.onclick = function (e) {
        e.preventDefault();
        page = (slidingLeft ? self.currentPage - 1 : self.currentPage + 1);
        self.gotoPage(page);
    };

    this.stage.appendChild(navButton);

    return this;
};

JSliderStage.prototype.gotoPage = function (page) {
    var marginLeft = (-1) * ((page - 1) * this.pageWidth);
    if (page < 1 || page > this.images.length) {
        return;
    }

    this.setNavigationState(page);

    this.imageList.style.marginLeft = marginLeft + 'px';
    this.currentPage = page;
};

JSliderStage.prototype.setNavigationState = function (page) {
    if (page === 1) {
        this.navButtonsList[0].classList.add('off');
        this.navButtonsList[1].classList.remove('off');
    } else {
        this.navButtonsList[0].classList.remove('off');
        if (page === this.images.length) {
            this.navButtonsList[1].classList.add('off');
        } else {
            this.navButtonsList[1].classList.remove('off');
        }
    }
};
