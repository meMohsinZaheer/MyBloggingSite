const MerchandiseModel = require('../models/MerchandiseManagementModel')


const MerchandiseInsertData = async (req, res) => {

    try {

        const { name, quantity, category } = req.body;
        let imageDetails = [];
        req.files.forEach(imageArrayObject => {
            const { filename, originalname, mimetype } = imageArrayObject;
            imageDetails.push({
                ImageUrl: `assets/Merchandise/${name}/${filename}`,
                ImageName: originalname,
                ImageMimeType: mimetype
            })
        });

        const docToCreate = new MerchandiseModel({
            name, quantity, category,
            imagedetails: imageDetails
        })

        const docToSave = await docToCreate.save();
        res.json({
            Message: "Data Saved Successfully",
            Body: docToSave,
            Data: true
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Result: null,
            Data: false
        })
    }
}

module.exports = {
    MerchandiseInsertData
}