class Paper{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:1.2,
			density:6
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			stroke("grey");
			fill("white")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}