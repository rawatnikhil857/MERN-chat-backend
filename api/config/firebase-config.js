import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccountKey = {
  "type": "service_account",
  "project_id": "chat-app-d9559",
  "private_key_id": "df8df462c47b10c745ddb11c647396953ff3cd8d",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEJKR+On1T2mxk\na2lO+gdwo91lcuaaJWZ5q73AOnXBun6PD/g1q7Mhgdyml712uEfAFjOziIiSKL2p\nfVw1D6S+GRWwSmiMA70GwOrffBQAPPwL+vSaN9uVMBuo934UO5nMq0ITSXkvqRAh\nFmI1vvkl/mUYj0BSNJtxRC3t9ze7rVKKKVil5PXaH+qJC11vTfpMiyLyP3xmvi4U\nEQUx1vltw1gLVfhov2EpFf0PK6+l84KOs+oieSLmbTMwoRGG+crhqHQJY5Bt83iR\nrtWwP/uIAk7UjrscmcAh6IZReSPU0rG7WxSkh45if42kCfQqx5AEammUSbbNIcjt\nr4l5+d/1AgMBAAECggEANR8tc8h4h/zYrWvP1iVuXWnr/N1dKjNl6R8D4auTl/ff\n7fQnx7Vsau9GaNIg7KXlPNdmgkHAp0EkeOJsViyZ9ChMEPZeEUmz6L/X/NYYfqYF\np2L820W0kVe5rg31lho8QcvCNgIIsclKhoOO7rp9tPYMwFWP2JPJ46fQ/qmdbRT+\ntYYIAzF/RfEeKR+VhaC/nat/Y/mfvn6iFKyH5T6BlxC9uWb7RBzWAPa9I+7K+dJ4\n2TuPzuZ2iISk+TAYEbQ8u+UfI85hEZ6vGYcV0QVHRSs1zbO5dMz07NFDPYCuFeYY\nWKQBbnL5QkXOHgrLw1nckkrC8VkLNl5p0wQ5Z1XrMwKBgQD0jc6jTCyqYLJriKgo\nXdhcOgRQd87FGzPGHu9czXsuH0a2CTdACSrkDK6OXXo8SCaV/gHdXCXh1Lp9TpQs\nGZCWqPh5RnUKd5lZqcfJ+8bLDEka0cOFUF4103JSNCAt6jb6hmn6oJljxVg87PXK\nUfErzDKapiJxZtU/9I3xPNpAzwKBgQDNUsmc82ke3XPP1q/xRSW5q/4IvN9FmsKr\nPHOJK2sQMIS2dTvWc3fBrFz1uB6a029Li2dRHHSB2ZymlSr8Z/KMHsHOSDpws/H2\nWHMD8aPE2HwhLtsAQJOU9DFrc56WCe6qaQZyUDFpEaHgNhEZ9UGOGCpZLC/Jdutq\nVwCTExGb+wKBgQDRHJzP52fd/Dc0WjMn6S8DlZxwzjFhO6Rmybb1TMMCqj3FlFXJ\nDM2/GNT96RKHj05nPT6M8Kl31HXuhg2PNAD9wthMoyGbZK8dC19J6F+Q6h1ssGcW\njKUyM27yuZ22hSqjx+HBLChdNrb/ycNWUAD/6Whv8pVLEJpSSKRC3jzl4wKBgBTb\nIPGZZAcnlXj6JLsMPA3FI7O9g6xtUPLV3CKFz4VAeGqUM/TPm82HdZXcEvfFHFv/\nGAqMKmV6NkhRhKFI6cFD6onKmm0SSjSsvVocNHdtSgaQ3NwEszkBKPfyMZyp+51B\nt87qyGoUyW2d8FTDrdoCKGMQcvYy5yzRE5Tc7f/7AoGAOTEg2nnr9JfCUcZkhk+M\nmppH7l8YtVcEjcrUhFhE1aLF4xaFZ8TCgCtpG+3znwnGS71KH1uaSjES4CwksvxA\n29VVyQX+J/oNGg1iCiEQbcuvYHZzied2v+oA2eEkVn/uXvXoHFPiJQYwLD4HcKZh\nN4I9g+WBnpT9ulwtq8ZefFM=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-n8ozn@chat-app-d9559.iam.gserviceaccount.com",
  "client_id": "101267708123639115826",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n8ozn%40chat-app-d9559.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;
