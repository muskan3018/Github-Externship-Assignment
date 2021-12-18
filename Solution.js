function findMissingDigit(str) {
    if (str.indexOf("-") != -1) {
        document.write("Negative");
        end;
    }
    index1 = (str.indexOf("*"));
    a = str.slice(0, index1);
    if (a.startsWith("0") == true || a.length < 1 || a.length > 4) {
        document.write("Leading Zero in A OR length Out of Range");
        end;
    }

    index2 = (str.indexOf("+"));
    b = str.slice(index1 + 1, index2);
    if (b.startsWith("0") == true || b.length < 1 || b.length > 4) {
        document.write("Leading Zero in B OR length Out of Range");
        end;
    }

    index3 = (str.indexOf("="));
    c = str.slice(index2 + 1, index3);
    if (c.startsWith("0") == true || c.length < 1 || c.length > 4) {
        document.write("Leading Zero in C OR length Out of Range");
        end;
    }

    d = str.slice(index3 + 1, );
    if (d.startsWith("0") == true || d.length < 1 || d.length > 4) {
        document.write("Leading Zero in D OR length Out of Range");
        end;
    }


    if (a.indexOf("?") != -1) {
        markindex = a.indexOf("?");
        b = Number(b);
        c = Number(c);
        d = Number(d);
        new_a = (d - c) / b;
        new_a = String(new_a);
        if (new_a.startsWith("0") == true || new_a.indexOf(".") != -1) {
            document.write("No peeceding 0 OR answer in points");
            end;
        }
        x = a.slice(0, markindex) + new_a.substr(markindex, 1) + a.slice(markindex, 0);

        if (new_a != x) {
            ret = -1;
        } else {
            ret = new_a.substr(markindex, 1);

        }

    } else if (b.indexOf("?") != -1) {
        markindex = b.indexOf("?");
        a = Number(a);
        c = Number(c);
        d = Number(d);
        new_b = (d - c) / a;
        new_b = String(new_b);
        if (new_b.startsWith("0") == true || new_b.indexOf(".") != -1) {
            document.write("No peeceding 0 OR answer in points");
            end;
        }
        x = b.slice(0, markindex) + new_b.substr(markindex, 1) + b.slice(markindex, 0);
        if (new_b != x) {
            ret = -1;
        } else {
            ret = new_b.substr(markindex, 1);
        }

    } else if (c.indexOf("?") != -1) {
        markindex = c.indexOf("?");
        b = Number(b);
        a = Number(a);
        d = Number(d);
        new_c = d - (a * b);
        new_c = String(new_c);
        if (new_c.startsWith("0") == true || new_c.indexOf(".") != -1) {
            document.write("No peeceding 0 OR answer in points");
            end;
        }
        x = c.slice(0, markindex) + new_c.substr(markindex, 1) + c.slice(markindex, 0);
        if (new_c != x) {
            ret = -1;
        } else {
            ret = new_c.substr(markindex, 1);
        }

    } else if (d.indexOf("?") != -1) {
        markindex = d.indexOf("?");
        a = Number(a);
        b = Number(b);
        c = Number(c);
        new_d = (a * b) + c;
        new_d = String(new_d);
        if (new_d.startsWith("0") == true || new_d.indexOf(".") != -1) {
            document.write("No peeceding 0 OR answer in points");
            end;
        }
        x = d.slice(0, markindex) + new_d.substr(markindex, 1) + d.slice(markindex, 0);
        if (new_d != x) {
            ret = -1;
        } else {
            ret = new_d.substr(markindex, 1);
        }

    }

    return ret;
}

// CODE WRITTEN BY MUSKAN PANCHAL 
