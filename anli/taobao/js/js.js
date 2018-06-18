/* 
* @Author: yangyongkang
* @Date:   2018-04-11 07:49:58
* @Last Modified by:   yangyongkang
* @Last Modified time: 2018-04-11 08:15:28
*/
function gonggao(){
    		    		function $(id){
    		    			return document.getElementById(id);
    		    		}
    		    		var lis=$('gonggao').getElementsByTagName('li');
    		    		var divs=$('con').getElementsByTagName('div');
    		    		for(var i=0; i<lis.length;i++){
    		    			lis[i].index=i;
    		    			lis[i].onmouseover =function(){
    		    				for(var i=0;i<lis.length;i++){
    		    					lis[i].className='';
    		    				}
    		    				this.className='on';
    		    				for(var i=0;i<divs.length;i++){
    		    					divs[i].className='';
    		    				}
    		    				divs[this.index].className='show';
    		    			}
    		    		}
}