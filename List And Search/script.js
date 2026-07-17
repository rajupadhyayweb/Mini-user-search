let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('.searchInput')


const users = [
    {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_83k0iF6_oYLoMB0jzwRPJkTfLmfDufR846g6cWvUoA&s=10',
        name: 'Breaden Eich',
        email: 'developed@javascript.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKToYWpMH4zW581PmptOX3JxT0e91gzSwC0mECWpLFEw&s=10',
        name: 'Narendra Damoderdas Modi',
        email: 'pmmantri@ourindia.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0I7eAi5benwsroKPz83lpex3pOAvqK913rNofDbszug&s=10',
        name: 'Elon Musk',
        email: 'elonbillion@Ai.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLGvoD9gorTjdDiWFQJ1zrr1auIyKrzeroTESDyJ5Nw&s=10',
        name: 'Rahul gandhi',
        email: 'rahul@automob.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUZOtq622bBmzSNxZWnZDp859MK8Gbjsf3czx8v--cA&s=10',
        name: 'Manoj Upadhyay',
        email: 'manoj@task.com'
    },{
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP92D3_X2TjtfvGoa157GtDyYG3PyvPyyaM7eJOnMaRw&s=10',
        name: 'Alince Johnson',
        email: 'alice@work.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyVXVHwqMOL2rYPQnE2jU_VSWWKGKdOi8bdKSA4tl5g&s=10',
        name: 'Raj Upadhyay',
        email: 'raj@tech.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxu8g4oHsm1DhbA473DEjTIqPYXsfx6nQByZLctidSA&s=10',
        name: 'Akshit Upadhyay',
        email: 'akshit@web.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kFoDFdCtCLLNXxnVKJO9mOyZoEIEu4eNY3VKXoFwdg&s=10',
        name: 'Harshit Upadhyay',
        email: 'harshit@technology.com'
    },
     {
        profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUZOtq622bBmzSNxZWnZDp859MK8Gbjsf3czx8v--cA&s=10',
        name: 'Aryan Upadhyay',
        email: 'aryan@business.com'
    },
    
    


]



function renderUsers(arr){

    userContainer.innerHTML = ''

  if (arr.length === 0) {
    userContainer.innerHTML = "<p>User Not Found </p>";
    return;
}


    arr.map(function(obj){

    let {profileUrl,name,email} = obj
    
    let divElem = document.createElement('div');
    divElem.className = 'user';
    divElem.innerHTML = `
    <div class="user">
                    <img src=${profileUrl} alt="profile">
                    <div class="details">
                        <h4>${name}</h4>
                        <p>${email}</p>
                    </div>
                </div>
    `

    userContainer.append(divElem);
})
}

renderUsers(users);

function handleSearch(e){
    let searchValue = e.target.value;
    let filteredUsers = users.filter( obj =>{
        return (
              obj.name.toLowerCase().includes(searchValue.toLowerCase()) || 
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    renderUsers(filteredUsers)

}

searchInput.addEventListener('input', handleSearch );

