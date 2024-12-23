camelcase = () => {
  input = document.getElementById("input").value;
  let output = "";
  let uppercase1 = true;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      output += " ";
      uppercase1 = true;
    } else if (uppercase1) {
      output += input[i].toUpperCase();
      uppercase1 = false;
    } else {
      output += input[i];
    }
  }

  document.getElementById("output").innerHTML = output;
};

reverse = () => {
  input2 = document.getElementById("input").value;
  console.log(input2);

  let reverse = "";
  

  for (let i = input2.length - 1; i >= 0; i--) {
    reverse += input2[i];
  }
  document.getElementById("output").innerHTML = reverse;
};

function vowels() {
  str1 = document.getElementById("input").value;
  l = str1.length;

  vowel = "";
  
  for (i = 0; i < l; i++) {
    if (
      str1[i] == "a" ||
      str1[i] == "e" ||
      str1[i] == "i" ||
      str1[i] == "o" ||
      str1[i] == "u"
    ) {
      vowel++;
    }
  }
  document.getElementById("output").innerHTML = vowel;
}

function uppercase() {
  str2 = document.getElementById("input").value;

  str2output = str2.toUpperCase();
  document.getElementById("output").innerHTML = str2output;
}

function lowercase() {
  str3 = document.getElementById("input").value;

  str3output = str3.toLowerCase();
  document.getElementById("output").innerHTML = str3output;
}

function conconsonants() {
  str4 = document.getElementById("input").value;
  l = str4.length;
  let count = 0;

  for (i = 0; i < l; i++) {
    if (
      str4[i] == "a" ||
      str4[i] == "e" ||
      str4[i] == "i" ||
      str4[i] == "o" ||
      str4[i] == "u"
    ) {
      // console.log("OOOOO");
    } else {
      count++;
    }
  }
  document.getElementById("output").innerHTML = count;
}

function countwordsinstmt() {
  str5 = document.getElementById("input").value;

  

  let stringcount = 0;
  if (str5.length === 0) 
    {
      stringcount=0; }


console.log("str5[i]");


  for (i = 0; i < str5.length; i++) {
   
    if (str5[0] == str5[i]) {
      stringcount = 1;
    }

    if (str5[i] ==" ") {
      stringcount++;
    }
  }
  
  document.getElementById("output").innerHTML =  stringcount;
}


// countwordsinstmt=()=>{
//   str5 = document.getElementById("input").value;
//   rtn="";
//     if (str5.length === 0) 
//       {
//       rtn=0; }
//       else{outputcountwords=str5.split(" ");

//         rtn=outputcountwords.length;
//          console.log(outputcountwords.length);}
//          document.getElementById("output").innerHTML = rtn;

// }



function mostfreqcharacter() {
  str6 = document.getElementById("input").value;


  
  str6nospace = str6.replaceAll(" ", "");
  console.log("nospace", str6nospace);

  str6split = str6nospace.split("");
  console.log("split", str6split);

  str6sort = str6split.sort();
  console.log("sort", str6sort);
  len = str6sort.length;
  console.log("len", len);


  let count = 0;
  tempcount = 0;

  
    for (i = 0; i < len; i++) 
      {
          
      tempcount = 0;
      console.log(i,"i in for loop");

   
      for (j = 0; j < len; j++) 
        {
        console.log(j, "j in for loop")
        if (str6sort[i] === str6sort[j]) 
          {
            console.log("str6sort[i]" +str6sort[i]);
            console.log("str6sort[j]" +str6sort[j]);
             tempcount++;
            
          // console.log(tempcount);
        }

        
      }
    }

    if (tempcount > count) {
      // console.log("PPPP");

      count = tempcount;
      console.log(tempcount,"tempcount");
     
      
    
      // console.log(tempcount);
      
    }
    
  
  document.getElementById("output").innerHTML =count;
}













longestword = () => {
  str7 = document.getElementById("input").value;
  let str8 = str7.split(" ");
  let longest = 0;
  let longestword;

  for (i = 0; i < str8.length; i++)
    if (longest < str8[i].length) {
      longest = str8[i].length;

      longestword = str8[i];
    }

  document.getElementById("output").innerHTML = longestword;
};





Anagram=()=>{
  str8= document.getElementById("input").value;
 
  str8removespaces=str8.replaceAll(" ","")


  str8split=str8removespaces.split(",");

  

  str11=str8split[0];
  str12=str8split[1];



  console.log("str11",str11);
  console.log("str12",str12);




  str11split=str11.split("");
  str12split=str12.split("");

  console.log(str11split);

  str11sort=str11split.sort();
  str12sort=str12split.sort();

  str11join=str11sort.join();
  str12join=str12sort.join();

  console.log(str11join);
  console.log(str12join);


  

  


    if(str11join===str12join && str11join.length===str12join.length)
    {
      output="string is an anagram";
      
      
    }
    else{
      output="string is not anagram";

    }
    document.getElementById("output").innerHTML = output;
  

}
