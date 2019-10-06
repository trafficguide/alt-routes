/**
 * Credits to https://gist.github.com/floriankraft/f84dbf3cf5c0ece164cfdb4246eab5d4
 * 
 * Modified to make it error-free and usable.
 * 
 * Utility function to utilize the Promise object to handle HTML requests.
 * @param url 
 */
function makeHttpRequest(url: string): Promise<any>
{
    return new Promise<any>(function (resolve, reject)
    {
        const request = new XMLHttpRequest();
        request.onload = function ()
        {
            if (this.status === 200)
            {
                resolve(this.response);
            }
            else
            {
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            let statusMessage = this.status.toString();
            if (statusMessage.toString() == "")
            {
                // Error that not even the server can respond: must be network-level errors
                reject(new Error("Network-related Error"));
            }
            else
            {
                reject(new Error("XMLHttpRequest returns: " + statusMessage));
            }
        };
        request.open("GET", url);
        request.send();
    });
}