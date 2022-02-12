const Article = require('../models/Article')

exports.cretaeArticle = async (req,res)=>{
    const article = new Article({
        title : req.body.title,
        description : req.body.description
    })
    await article.save()
    res.redirect('/article')
}

exports.getAll = async(req,res)=>{
    const results = await Article.find()
    res.render('index', {data:results})
}

exports.deleteArticle = async (req,res)=>{
    await Article.findByIdAndDelete({_id:req.params.id})
    res.redirect('/article')
}

exports.getById = async (req,res)=>{
    const result = await Article.findById({_id : req.params.id})
    res.render('update', {data: result})
}

exports.updateArticle = async(req,res)=>{
    const result = await Article.findByIdAndUpdate({_id:req.params.id})
    result.title = req.body.title
    result.description = req.body.description

    await result.save()
    res.redirect('/article');
}