function check(string)
{
    if(string.match(/^https:\/\/i\.imgur\.com\/.+\./))
    {
        return true;
    }
    else
    return false;
}
