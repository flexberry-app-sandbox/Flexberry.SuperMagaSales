﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SuperMagaSales
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Client.
    /// </summary>
    // *** Start programmer edit section *** (Client CustomAttributes)

    // *** End programmer edit section *** (Client CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ClientE", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'"})]
    [View("ClientL", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'"})]
    public class Client : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fSurname;
        
        // *** Start programmer edit section *** (Client CustomMembers)

        // *** End programmer edit section *** (Client CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Client.Name CustomAttributes)

        // *** End programmer edit section *** (Client.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Client.Name Get start)

                // *** End programmer edit section *** (Client.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Client.Name Get end)

                // *** End programmer edit section *** (Client.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Client.Name Set start)

                // *** End programmer edit section *** (Client.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Client.Name Set end)

                // *** End programmer edit section *** (Client.Name Set end)
            }
        }
        
        /// <summary>
        /// Surname.
        /// </summary>
        // *** Start programmer edit section *** (Client.Surname CustomAttributes)

        // *** End programmer edit section *** (Client.Surname CustomAttributes)
        [StrLen(255)]
        public virtual string Surname
        {
            get
            {
                // *** Start programmer edit section *** (Client.Surname Get start)

                // *** End programmer edit section *** (Client.Surname Get start)
                string result = this.fSurname;
                // *** Start programmer edit section *** (Client.Surname Get end)

                // *** End programmer edit section *** (Client.Surname Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Client.Surname Set start)

                // *** End programmer edit section *** (Client.Surname Set start)
                this.fSurname = value;
                // *** Start programmer edit section *** (Client.Surname Set end)

                // *** End programmer edit section *** (Client.Surname Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ClientE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ClientE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ClientE", typeof(IIS.SuperMagaSales.Client));
                }
            }
            
            /// <summary>
            /// "ClientL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ClientL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ClientL", typeof(IIS.SuperMagaSales.Client));
                }
            }
        }
    }
}
