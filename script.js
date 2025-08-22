function mincost(arr)
{ 
	let ans=0;
	arr.sort((a,b)=>a-b);
	while(arr.length>1){
		let num1=arr.shift();
		let num2=arr.shift();
		let num=num1+num2;
		ans+=num;
		arr.push(num);
		arr.sort((a,b)=>a-b);
	}
	return ans;
  
}

module.exports=mincost;
