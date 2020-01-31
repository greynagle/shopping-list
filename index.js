$(function() {
    // this looks at the list item of the selected check button and toggles the strikethrough class on click
    $(".shopping-list").on('click', '.shopping-item-toggle', function(e){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })

    // looks at the list item of the selected delete button and removes the list item
    $(".shopping-list").on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove();
    })

    $("#js-shopping-list-form").submit(function(e){
        e.preventDefault();
        const textInput=$(this).find('#shopping-list-entry').val();
        const path=$(this).closest('.container').find('.shopping-list')
        path.append(
            `<li>
                <span class="shopping-item">${textInput}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`
        )
    })
})



