const palindromes = function (word) {
    condensedWord=word.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');
    for(let i=0,j=condensedWord.length-1; i<=condensedWord.length/2;i++,j--){
        if(condensedWord[i]!=condensedWord[j]){
            return false;
        }
        
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;

  /*let i=0, j=word.length-1;
    while(i<j){
        while(word[i]==(" "||","||"."||"?"||"!")){
            i++;
        }
        while(word[j]==(" "||","||"."||"?"||"!")){
            j--;
        }
        if(word[i]!=word[j]){
            return false;
        }
        
    }
    return true;*/
