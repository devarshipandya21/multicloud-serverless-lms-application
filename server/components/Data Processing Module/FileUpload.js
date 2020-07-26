require('dotenv').config();
var aws = require('aws-sdk');


aws.config.update({
    region: 'us-east-1',
    accessKeyId: 'ASIAX2ASTWWGXEVHX3V4',
    secretAccessKey: 'gjtKvWvFwikG5z3/+RyTycKS2ejg37ngvA4Kewis',
    sessionToken: 'FwoGZXIvYXdzEPf//////////wEaDB1Yy8uWW+9Zc2JVECK+AbrbVPRGNkFn4r2VBRIVGXuiHU/4xg7aLUPifln/bqxGT82e08ZwqHXNSH4vD9ThmgjvpX2+z/iQMlhWEHS6Ev2x1oEFJfDQfugPWSgz2vh8UkLqTL1KYKNBGGgUG2U11Rrsdat3U7qQj9+WnwAxHcKvNcg1FAKAcub1+/cPF9u1/Ka55/iq+fOor5sHVIMX/ZBFSFKXyz8UdrrI50bF90oeI3HU3NIjuK7IUWsSjyoOwNg6ZhOxIM+hFh1lGWIotIDv+AUyLdD6ERUkIP6KrnCOuuOBC9rFH0/FJDoFSWLMRBw1/k+4uWfw6qPuNYHgLoIkLw=='
})
const UPLOADED_FILES_S3_BUCKET = 'uploaded-files-dal-serverless-lms'

// reffered to the article https://medium.com/@khelif96/uploading-files-from-a-react-app-to-aws-s3-the-right-way-541dd6be689 while writing the below code
exports.sign_s3 = (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    const fileFullName = fileName + '.' + fileType;
    const s3Params = {
        Bucket: UPLOADED_FILES_S3_BUCKET,
        Key: fileFullName,
        Expires: 50,
        ContentType: fileType,
        ACL: 'public-read'
    };
    console.log("came to backend")
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            res.json({ success: false, error: err })
        }

        const returnData = {
            signedRequest: data,
            url: `https://${UPLOADED_FILES_S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        res.json({ success: true, data: { returnData } });
    });
}
