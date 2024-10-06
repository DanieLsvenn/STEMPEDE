import React, { useState } from 'react';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('account-general');

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h4 className="text-2xl font-bold py-3 mb-4">Account settings</h4>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-row">
          <div className="w-1/4">
            <div className="flex flex-col divide-y">
              <button
                className={`py-3 px-4 text-left ${activeTab === 'account-general' ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                  }`}
                onClick={() => setActiveTab('account-general')}
              >
                General
              </button>
              <button
                className={`py-3 px-4 text-left ${activeTab === 'account-change-password' ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                  }`}
                onClick={() => setActiveTab('account-change-password')}
              >
                Change password
              </button>
              <button
                className={`py-3 px-4 text-left ${activeTab === 'account-info' ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                  }`}
                onClick={() => setActiveTab('account-info')}
              >
                Info
              </button>
              
              <button
                className={`py-3 px-4 text-left ${activeTab === 'account-notifications' ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                  }`}
                onClick={() => setActiveTab('account-notifications')}
              >
                Notifications
              </button>
            </div>
          </div>

          <div className="w-3/4 p-6">
            {/* Tab content based on activeTab */}
            {activeTab === 'account-general' && (
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="avatar"
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700 cursor-pointer">
                      Upload new photo
                      <input type="file" className="hidden" />
                    </label>
                    <p className="text-gray-500 text-sm mt-1">Allowed JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <hr className="py-px w-full mb-6 mt-2 bg-black" />

                <div className="mt-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      className="mt-1 px-4 py-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 px-4 py-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                      type="text"
                      className="mt-1 px-4 py-2 w-full border rounded-md"
                    />
                    <div className="mt-3 bg-yellow-100 text-yellow-700 p-2 rounded-md">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)" className="underline">Resend confirmation</a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Change password tab */}
            {activeTab === 'account-change-password' && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Current password</label>
                  <input
                    type="password"
                    className="mt-1 px-4 py-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">New password</label>
                  <input
                    type="password"
                    className="mt-1 px-4 py-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Repeat new password</label>
                  <input
                    type="password"
                    className="mt-1 px-4 py-2 w-full border rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Info tab */}
            {activeTab === 'account-info' && (
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Birthday</label>
                  <input
                    type="date"
                    className="mt-1 px-4 py-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <select className="mt-1 px-4 py-2 w-full border rounded-md">
                    <option></option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>France</option>
                  </select>
                </div>

                <hr className="py-px w-full mb-6 mt-2 bg-black" />

                <div className='block font-bold mb-4'>Contacts</div>

                <div class="card-body pb-2">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone number</label>
                    <input
                      type="phone"
                      className="mt-1 px-4 py-2 w-full border rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                      type="address"
                      className="mt-1 px-4 py-2 w-full border rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification tab */}
            {activeTab === 'account-notifications' && (
              <div className="tab-pane fade" id="account-notifications">
                <div className="card-body pb-2">
                  <h6 className="block font-bold mb-4">Activity</h6>
          
                  <div className="form-group mb-4">
                    <label className="switcher flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="switcher-input appearance-none checked:bg-blue-500 w-6 h-6 bg-gray-300 rounded-full relative cursor-pointer"
                        defaultChecked
                      />
                      <span className="switcher-label text-sm">
                        Email me when my products is on the way
                      </span>
                    </label>
                  </div>
          
                  <div className="form-group mb-4">
                    <label className="switcher flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="switcher-input appearance-none checked:bg-blue-500 w-6 h-6 bg-gray-300 rounded-full relative cursor-pointer"
                        defaultChecked
                      />
                      <span className="switcher-label text-sm">
                        Email me when my products has been delivered
                      </span>
                    </label>
                  </div>
                </div>
          
                <hr className="py-px w-full mb-6 mt-2 bg-black" />
          
                <div className="card-body pb-2">
                  <h6 className="block font-bold mb-4">Application</h6>
          
                  <div className="form-group mb-4">
                    <label className="switcher flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="switcher-input appearance-none checked:bg-blue-500 w-6 h-6 bg-gray-300 rounded-full relative cursor-pointer"
                        defaultChecked
                      />
                      <span className="switcher-label text-sm">News and announcements</span>
                    </label>
                  </div>
          
                  <div className="form-group mb-4">
                    <label className="switcher flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="switcher-input appearance-none checked:bg-blue-500 w-6 h-6 bg-gray-300 rounded-full relative cursor-pointer"
                      />
                      <span className="switcher-label text-sm">Weekly product updates</span>
                    </label>
                  </div>
          
                  <div className="form-group mb-4">
                    <label className="switcher flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="switcher-input appearance-none checked:bg-blue-500 w-6 h-6 bg-gray-300 rounded-full relative cursor-pointer"
                        defaultChecked
                      />
                      <span className="switcher-label text-sm">Weekly blog digest</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs can be created similarly */}
          </div>
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save changes</button>
        <button className="px-4 py-2 ml-2 bg-gray-200 rounded-md">Cancel</button>
      </div>
    </div>
  );
}
