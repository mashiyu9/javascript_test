$(document).ready(function(){
  let subject_points;
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    // let sum = subject_points[0];
    // sum = sum + subject_points[1];
    // sum = sum + subject_points[2];
    // sum = sum + subject_points[3];
    // sum = sum + subject_points[4];

    let sum = subject_points.reduce(function(a,b){
      return a + b;
    })
    $("#sum_indicate").text(sum);


    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let ave;
    for (var i = 0; i < subject_points.length - 1; i++) {
      ave = sum / 5;
    };
    $("#average_indicate").text(ave);
    };

  // 上は数値が変わるたびに動くが下は最初に読み込んだ一回しか動かない。


  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
    let ave = $("#average_indicate").text();
    let lank;
    if(ave >= 80){
      rank = "A";
    } else if(ave >= 60){
      rank = "B";
    } else if(ave >= 40){
      rank = "C";
    } else {
      rank = "D";
    }
    $("#evaluation").text(rank);
  }


  function get_pass_or_failure(){
    let judge_my = "合格";
    for (var i = 0; i < subject_points.length - 1; i++) {
      if(subject_points[i] < 60){
        judge_my = "不合格";
        break;
      }
    }$("#judge").text(judge_my);
    $
  }



    // if(subject_points[0] >= 60 && subject_points[1] >= 60 && subject_points[2] >= 60 && subject_points[3] >= 60 && subject_points[4] >= 60){
    //   $("#judge").text("合格");
    // } else {
    //   $("#judge").text("不合格");
    // }


  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${$('#evaluation').text()}です。${$("#judge").text()}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // test
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    get_achievement();
  });

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    get_pass_or_failure();
  });















  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
