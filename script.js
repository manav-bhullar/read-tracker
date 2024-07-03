
function initializeFormDisplay() {
    const modal = document.getElementById("form");
    const btn = document.querySelector(".button");
    const closeModal = document.querySelector(".close-modal");
    const submit = document.querySelector(".sbmt-btn");
  

    btn.addEventListener('click', function() {
        modal.style.display = "inline-flex";
    });
  

    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
  

    window.addEventListener('click', function(event) {
        if(event.target == modal) {
            modal.style.display = "none";
        }
    });
  

    submit.addEventListener('click', function(event) {
        event.preventDefault(); 
        if(!isFormEmpty()) {
            addBookToList();
            modal.style.display = "none";
        }
    });
  }
  

  function isFormEmpty() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("number").value;
  
    return title === "" || author === "" || pages === "";
  }
  

  function addBookToList() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("number").value;
    const isRead = document.getElementById("bookRead").checked;
    const url = document.getElementById("url").value || ""; 
  
    const bookList = document.getElementById("booklist");
  
    // Create a new book item element
    const div = document.createElement("div");
    div.className = "book-item";
  

    const img = document.createElement("img");
    img.src = url;
    img.alt = `${title} cover`;
    div.appendChild(img); 
  

    const bookDetails = document.createElement("div");
    bookDetails.className = "book-details";
    bookDetails.innerHTML = `
        <h3>${title}</h3>
        <p> by ${author}</p>
        <p class="pages">${pages} pages</p>
        <p class="read-status ${isRead ? "read" : "unread"}">${isRead ? "Read" : "Unread"}</p>
    `;
    div.appendChild(bookDetails); 
  

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function() {
        bookList.removeChild(div); 
    });
    div.appendChild(deleteBtn); 
  

    bookList.appendChild(div);
  

    clearFormFields();
  }
  

  function clearFormFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("number").value = "";
    document.getElementById("bookRead").checked = false;
    document.getElementById("url").value = "";
  }
  

  initializeFormDisplay();
  