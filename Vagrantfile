# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.define :golvm do |gol_config|

    # UNCOMMENT THE LINES BELOW TO START WITH A FRESH BOX
    # A clean ubuntu 14.04 32-bit box, and the
    # url to download from if necessary
    gol_config.vm.box = "trusty32"
    gol_config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-i386-vagrant-disk1.box"


    # Use salt to provision the vm
    gol_config.vm.synced_folder "vm/salt/", "/srv/salt"
    gol_config.vm.synced_folder "vm/salt/pillar/", "/srv/pillar"
    gol_config.vm.provision :salt do |salt|
      salt.minion_config = "vm/salt/minion"
      salt.run_highstate = true
      salt.verbose = true
      salt.install_type = "stable"
    end

    # forward listening port to host
    gol_config.vm.network "forwarded_port", guest: 80, host: 3000

    # also place our code in the home folder of the server
    # This is required for our salt configs to work properly
    gol_config.vm.synced_folder ".", "/home/vagrant/game-of-life"


    # We can afford to beef up the VM a bit
    gol_config.vm.provider "virtualbox" do |v|
      v.memory = 1024
      v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
    end


  end

end
