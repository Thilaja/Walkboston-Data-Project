function renderPosts(boston, container) {
    const people = boston.data;
    let descending =people.sort((a,b)=>{
        return b[11]-a[11]
    })
    let TopFive = descending.slice(0,5);
    console.log(TopFive);
    const len = boston.data.length;
    var topSalaryPeople=[];
    topSalaryPeople.unshift(TopFive);
    console.log(topSalaryPeople);//[Array(5)]
    let html = '';
    
    for (let i = 0; i < len; i++) {
            if(people[i][11]>182485){

                html +=
                '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
    
            }

    }
     
    
         // TODO: add code to display the html variable inside a ul element with id="data"
         
         
    // Hint: you can use the container parameter's innerHTML property to insert Html tags
    container.innerHTML = '<ul id = "data">' + html + '</ul>';
   
    
  }
  renderPosts(boston, document.getElementById('container'));