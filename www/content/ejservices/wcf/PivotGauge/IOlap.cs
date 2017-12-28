﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace EJServices.Wcf.Pivotgauge
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IOlapGauge" in both code and config file together.
    [ServiceContract]
    public interface IOlap
    {
        [OperationContract]
        Dictionary<string, object> Initialize(string action, string customObject);
    }
}