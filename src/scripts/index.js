const silencer = (targetClass) => {
	const targetElement = document.getElementsByClassName(targetClass);
	// Hide all targetElement
	for (let i = 0; i < targetElement.length; i++) {
		targetElement[i].style.display = 'none';
	}
};

silencer(
	'css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr',
);
