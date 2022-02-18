console.log('INFINITY TEAM API ');
function getData(a)
{
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json(); 
    }).then((data)=>{
       console.log(data);
       var value=data;       
           var img1=(value['data'][0]['avatar']);
           document.getElementById('p1img').src = img1;
           var img2=(value['data'][1]['avatar']);
           document.getElementById('p2img').src = img2;
           var img3=(value['data'][2]['avatar']);
           document.getElementById('p3img').src = img3;
           var img3=(value['data'][3]['avatar']);
           document.getElementById('p4img').src = img3;
           var img3=(value['data'][4]['avatar']);
           document.getElementById('p5img').src = img3;
           var img3=(value['data'][5]['avatar']);
           document.getElementById('p6img').src = img3; 
          ////////////////////////////////////////////-------Name
           var first1=(value['data'][0]['first_name']);
           var last1=(value['data'][0]['last_name']);
           document.getElementById('name1').innerHTML ="Name: "+first1+" "+last1;
           var first1=(value['data'][1]['first_name']);
           var last1=(value['data'][1]['last_name']);
           document.getElementById('name2').innerHTML ="Name: "+first1+" "+last1;
           var first1=(value['data'][2]['first_name']);
           var last1=(value['data'][2]['last_name']);
           document.getElementById('name3').innerHTML ="Name: "+first1+" "+last1;
           var first1=(value['data'][3]['first_name']);
           var last1=(value['data'][3]['last_name']);
           document.getElementById('name4').innerHTML ="Name: "+first1+" "+last1;
           var first1=(value['data'][4]['first_name']);
           var last1=(value['data'][4]['last_name']);
           document.getElementById('name5').innerHTML ="Name: "+first1+" "+last1;
           var first1=(value['data'][5]['first_name']);
           var last1=(value['data'][5]['last_name']);
           document.getElementById('name6').innerHTML ="Name: "+first1+" "+last1;
          /////////////////////////////////////////////////-----Email
      var mail1=(value['data'][0]['email']);
           document.getElementById('mail1').innerHTML="Email: "+mail1;
           var mail2=(value['data'][1]['email']);
           document.getElementById('mail2').innerHTML="Email: "+mail2;
           var mail3=(value['data'][2]['email']);
           document.getElementById('mail3').innerHTML="Email: "+mail3;
           var mail3=(value['data'][3]['email']);
           document.getElementById('mail4').innerHTML="Email: "+mail3;
           var mail3=(value['data'][4]['email']);
           document.getElementById('mail5').innerHTML="Email: "+mail3;
           var mail3=(value['data'][5]['email']);
           document.getElementById('mail6').innerHTML="Email: "+mail3;
        })
}
