let nums = [50, 30, 25, 10, 2]

function numsort(nums){
    let counter = 0;
    for(i = 0; i < nums.length; i++){
        if(nums[i] > 20){
            counter++;
        }
        if(counter > 3){
            counter = -1;
        }
    }
    console.log(counter);
}

function arraySort(nums){
    for(i = 0; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            
        }
    }
}

arraySort(nums);


