$(document).ready(function(){
                $("button.filter-button").click(function(){      // local disk, fat arrow is a global disk
                    $("#filterid").val($("#pref-breed").val())
                    $("#filterform").submit()
                    console.log($("#pref-breed").val())
                })
})

