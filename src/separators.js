function thousands_separators(num) {
    var str_num=""+num;
    var str_point_after;
    var str_point_before=str_num;
    var has_point=false;
    var str_result="";
    var array_str=[];

    for(var i=0;i<str_num.length;i++){
        if (str_num[i]=='.'){
            // 取出小数点后的字符串.1234 和小数点前的字符串
            str_point_after=str_num.substring(i);
            str_point_before=str_num.substring(0,i);
            has_point=true;
            git

        }
    }
    // 如果不是小数
    if(has_point==false){
        str_point_before=str_num;
        str_point_after="";


    }


    //处理整数部分str_point_before

    var length=str_point_before.length;

    if(length<=3) {
        return ( str_point_before+str_point_after);

    }else{
        //逗号个数
        var commma_num=0;


        // 字符串转数组12345
        for(var i=0;i<str_point_before.length;i++){
            array_str[i]=str_point_before[i];
        }
        // 数组反序54321
        array_str=array_str.reverse();

        //逗号分隔，每3个，赋值给字符串
        for(var i= 0;i< array_str.length;i++){

            str_result+=array_str[i];
            if( (str_result.length-commma_num)%3==0){
                commma_num++;
                str_result+=','
            }
        }
        // 字符串转数组后反序
        for(var i=0;i<str_result.length;i++){
            array_str[i]=str_result[i];
        }
        array_str=array_str.reverse();
        //数组转字符串
        str_result =array_str.join('');

    }

    return (str_result+str_point_after);

}

module.exports = thousands_separators;
