const Transaction=require('../models/Transactions')

exports.getTransactions=async (req,res,next)=>{
    try {
        const transactions=await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
    } catch (error) {
        return res.send(500).json({
            success:false,
            error:'server Error'
        });
    }
}


exports.addTransaction=async (req,res,xnext)=>{
   try {
    const {text,amount}=req.body;
    const transactions=await Transaction.create(req.body);
    return res.status(201).json({
        success:true,
        data:transactions
    })
   } catch (err) {
   if(err.name==='ValidationError'){
    const messages=Object.values(err.errors).map(val=>val.messages);
    return res.status(400).json({
        success:false,
        error:messages
    })
   }else{
    return res.send(500).json({
        success:false,
        error:'server Error'
    });
   }
   }
}

exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
       
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No Transaction Found"
            });
        }
        
        await Transaction.deleteOne({ _id: req.params.id });
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
