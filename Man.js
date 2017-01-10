function Man (name,by,dy,fat, heigth_) {

	this.name = name;
	this.col = color(random(10, 255),random(10, 255),random(10, 255));
	this.img
	this.showImage = false;
	
	this.by = by;
	this.dy = dy;
	this.fat = fat;
	this.heigth = heigth_
	this.age = dy - by;


	this.draw_rect= function(){
		stroke(this.col);
		noFill();
		rect(this.by,this.heigth,this.age,this.fat);
	}
	this.draw_text= function(){
		stroke(20,250,110,200)
		textFont('consolas')
		textSize(this.fat);
		//textAlign(CENTER);
		text(this.name, this.by, this.heigth+this.fat);
	}
	this.draw_image= function(){

		if (this.showImage){

			if (this.img){
				console.log(this.img  + "is here")
				image(this.img, 1000, 20);
			}else{
				this.img = loadImage("peoples_images/" + this.name + ".jpg",function (ima){
					console.log("yessss")
				})
			}
			
		}
		
	}

	//																						or 0 | test it
	this.draw = function(){
		
		// оболочка
		this.draw_rect()
		// имя в оболочке
		this.draw_text()
		// фотка
		this.draw_image()
		
	}

	this.visible = function(){
		if (this.showImage)
		console.log(this.name + " is " + this.showImage)
	}



	// this.gotData = function gotData(data){
	// 	this.img = data
	// }

	this.clicked = function(m_x,m_y){


		if (((m_y > this.heigth) && (m_y < this.heigth+this.fat) && (m_x > this.by) && (m_x < this.by + this.age)))
		{
			this.showImage = !this.showImage
		}
	}

	return this
}