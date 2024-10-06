// selectionner le lien contenu dans le formulaire
/*let monLien = document.querySelector("button");

// appliquer un evenement sur le lien

monLien.addEventListener("click", ()=>{
    console.log("vous avez cliquer sur le lien");
})*/
$(document).ready(function() {
    const answerCorrect = {
        q1: 'r1',
        q2: 'r4',
        q3: 'r8',
    }

    $('.reponse').css({
        'display': 'none',
        'font-style': 'italic',
        'font-weight': '400'
    })


    $("form").on("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi classique du formulaire
        // Vérifier la question 1
        $('.question').css({
            'display': 'flex',
            'flex-direction': 'row',
            'background-color': 'aquamarine',
            'border': '4px solid',
            'margin': '10px',
            'position': 'relative',
            'margin-bottom': '20px',
        })
        $('.reponse').css({
            'display': 'none',
            'font-style': 'italic',
            'font-weight': '400'
        })
        $('img').css({
            'position': 'absolute',
            'right': '5px',
            'width': '50px',
            'height': '50px',
        })
        $('button').css({
            'margin-left': '47%',
        });
        if ($("input[name='q1']:checked").attr("id") === answerCorrect.q1) {
            // Bonne réponse pour la question 1
            $("#img1").attr("src", "bon.png");
        } else {
            $("#img1").attr("src", "mauvais.png");
            $("#reponse1").css("color", "red").show()
        }
        if ($("input[name='q2']:checked").attr("id") === answerCorrect.q2) {
            // Bonne réponse pour la question 2
            $("#img2").attr("src", "bon.png");

        } else {
            $("#img2").attr("src", "mauvais.png");
            $("#reponse2").css("color", "red").show();
        }
        if ($("input[name='q3']:checked").attr("id") === answerCorrect.q3) {
            // Bonne réponse pour la question 3
            $("#img3").attr("src", "bon.png");
        } else {
            $("#img3").attr("src", "mauvais.png");
            $("#reponse3").css("color", "red").show()
        }

    })
})