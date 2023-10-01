import { authConfig } from './auth';

const isProduction = process.env.LIFEMEET_IS_PRODUCTION === 'true';

const baseFrontendURL = process.env['FRONTEND_URL']!;
const baseServerURL = process.env['SERVER_URL']!;

const elasticsearchURL = process.env['LIFEMEET_ELASTIC_URL'];

const awsConfig = {
    secretKey: process.env['AWS_SECRET_ACCESS_KEY']!,
    accessKeyId: process.env['AWS_ACCESS_KEY_ID']!,
    sesEmailSource: process.env['SES_EMAIL_SOURCE']!,
    mediaBucket: process.env['S3_BUCKET']!,
    region: 'ap-south-1',
};

const defaultAccountName = 'life-meet';

export { isProduction, defaultAccountName, authConfig, awsConfig, baseFrontendURL, baseServerURL, elasticsearchURL };
