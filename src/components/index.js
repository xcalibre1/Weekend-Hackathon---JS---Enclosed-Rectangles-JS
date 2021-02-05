//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	var arr=["top","bottom","left","right","height","width"]
	for(let key of arr){
	   if(!rec1.hasOwnProperty(key))
		   rec1[key]="0px"
    if(!rec2.hasOwnProperty(key))
		   rec2[key]="0px"
	}
  console.log(rec1);
  console.log(rec2);
	let top2=Number(rec2.top.substr(0,rec2.top.length-2)),top1=Number(rec1.top.substr(0,rec1.top.length-2));
	let left2=Number(rec2.left.substr(0,rec2.left.length-2)),left1=Number(rec1.left.substr(0,rec1.left.length-2));
	let height2=Number(rec2.height.substr(0,rec2.height.length-2)),height1=Number(rec1.height.substr(0,rec1.height.length-2));
	let width2=Number(rec2.width.substr(0,rec2.width.length-2)),width1=Number(rec1.width.substr(0,rec1.width.length-2));
	let right2=Number(rec2.right.substr(0,rec2.right.length-2)),right1=Number(rec1.right.substr(0,rec1.right.length-2));
	let bottom2=Number(rec2.bottom.substr(0,rec2.bottom.length-2)),bottom1=Number(rec1.bottom.substr(0,rec1.bottom.length-2));
  console.log(top1,top2,bottom1,bottom2,right1,right2,left1,left2,height1,height2,width1,width2)
	if(top2>=top1 && bottom2>=bottom1 && height1>=height2 &&left2>=left1 && right2>=right1 && width1>=width2){
		let obj={
                        top: `${Math.abs(top2-top1)}px`,
                        left: `${Math.abs(left2-left1)}px`,
                        width: rec2.width,
                        height: rec2.height,
			bottom:`${Math.abs(bottom2-bottom1)}px`,
			right:`${Math.abs(right2-right1)}px`,
			children:[]}
		for(let key in rec2 ){
			if(rec2[key]=="0px")
				delete obj[key];
		}
		for(let key in rec1 ){
			if(rec1[key]=="0px")
				delete rec1[key];
		}
    console.log(obj)
		return {
			...rec1,
                        children: [obj]
                }
	}
	else if(top2<=top1 && bottom2<=bottom1 && height1<=height2 &&left2<=left1 && right2<=right1 && width1<=width2){
		let obj={
                        top: `${Math.abs(top2-top1)}px`,
                        left: `${Math.abs(left2-left1)}px`,
                        width: rec1.width,
                        height: rec1.height,
			bottom:`${Math.abs(bottom2-bottom1)}px`,
			right:`${Math.abs(right2-right1)}px`,
			children:[]}
		for(let key in rec1 ){
			if(rec1[key]=="0px")
				delete obj[key];
		}
		for(let key in rec2 ){
			if(rec2[key]=="0px")
				delete rec2[key];
		}
		return {
			...rec2,
                        children: [obj]
                }
	}
	else{
		for(let key in rec1 ){
			if(rec1[key]=="0px")
				delete rec1[key];
		}
    console.log("elseBlock")
		return  {...rec1};
	}
}

module.exports = updateStructure;
